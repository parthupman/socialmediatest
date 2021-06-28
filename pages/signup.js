import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";
import CommonInputs from "../components/Common/CommonInputs";
import ImageDropDiv from "../components/Common/ImageDropDiv";
import {
  HeaderMessage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { registerUser } from "../utils/authUser";
import uploadPic from "../utils/uploadPicToCloudinary";
const bcrypt = require("bcryptjs");

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });

  const { name, email, password, bio } = user;
  const handlechange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvilable, setUsernameAvilable] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const isUser = Object.values({ name, email, password, bio }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  // const checkUsername = async () => {
  //     setUsernameLoading(true);
  //     try {
  //       cancel && cancel();
  //       const CancelToken = axios.CancelToken;
  //       const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
  //         cancelToken: new CancelToken((canceler) => {
  //           cancel = canceler;
  //         }),
  //       });
  //       if (res.data === "Avilable") {
  //         if(errorMsg!==null) setErrorMsg(null)
  //         setUsernameAvilable(true);
  //         setUser((prev) => ({ ...prev, username }));
  //       }
  //     } catch (error) {
  //       setUsernameAvilable(false)
  //       setErrorMsg("Username not avilable");
  //     }
  //     setUsernameLoading(false);
  //   };

  const checkUsername = async () => {
    setUsernameLoading(true);
    try {
      cancel && cancel();
      const CancelToken = axios.CancelToken;
      const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
        cancelToken: new CancelToken((canceler) => {
          cancel = canceler;
        }),
      });
      if (res.data === "Avilable") {
        if (errorMsg !== null) setErrorMsg(null);
        setUsernameAvilable(true);
        setUser((prev) => ({ ...prev, username }));
      }
    } catch (error) {
      setUsernameAvilable(false);
      setErrorMsg("Username not avilable");
    }
    setUsernameLoading(false);
  };

  useEffect(() => {
    username === "" ? setUsernameAvilable(false) : checkUsername();
  }, [username]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    let profilePicUrl;
    if (media !== null) {
      profilePicUrl = await uploadPic(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error uploading image");
    }
    await registerUser(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handlesubmit}
      >
        <Message
          error
          header="oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <ImageDropDiv
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            setMedia={setMedia}
            inputRef={inputRef}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            handlechange={handlechange}
          />
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handlechange}
            fluid
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handlechange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            required
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlechange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Form.Input
            required
            loading={usernameLoading}
            error={!usernameAvilable}
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (regexUserName.test(e.target.value)) {
                setUsernameAvilable(true);
              } else {
                setUsernameAvilable(false);
              }
            }}
            fluid
            icon={usernameAvilable ? "check" : "close"}
            iconPosition="left"
          />

          <CommonInputs
            user={user}
            showSocialLinks={showSocialLinks}
            setShowSocialLinks={setShowSocialLinks}
            handlechange={handlechange}
          />

          <Divider hidden />
          <Button
            icon="signup"
            content="signup"
            type="submit"
            color="orange"
            disabled={submitDisabled || !usernameAvilable}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </>
  );
}
export default Signup;

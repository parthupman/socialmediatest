import React from "react";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();

  const { username, pageNumber } = router.query;

  return;
  <div>
    {username}, pageNumber={pageNumber}{" "}
  </div>;
}
export default ProfilePage;

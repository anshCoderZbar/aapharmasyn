import { PageWrapper } from "components/ui/PageWrapper";
import { useAtom } from "jotai";
import React from "react";
import { userDetails } from "store/authentication";

export default function Dashboard() {
  const [authentication] = useAtom(userDetails);
  console.log(authentication);
  return (
    <div>
      <PageWrapper heading="Dashboard" slug="dashboard" name="Dashboard" />
    </div>
  );
}

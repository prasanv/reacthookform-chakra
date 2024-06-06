import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}

export default Home;

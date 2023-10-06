import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Wrapper, Button } from "./Cookies.styles";

const Cookies = () => {
  const [accept, setAccept] = useState(false);

  return createPortal(
    <>
      {!accept ? (
        <Wrapper>
          The website uses cookies for proper operation. Each can decide for
          himself whether he allows cookies by setting the your browser
          accordingly.
          <Button onClick={() => setAccept(true)}>I understand</Button>
        </Wrapper>
      ) : null}
    </>,
    document.getElementById("cookies")
  );
};

export default Cookies;

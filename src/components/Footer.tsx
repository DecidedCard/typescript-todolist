import * as FS from "../style/footerStyle";

const Footer = () => {
  return (
    <FS.FooterStyle>
      <FS.FooterInfo>
        <p>
          <label>만든사람: </label>정해준
        </p>
        <p>
          <label>사용한 것들: </label>React, VITE, TypeScript,
          Styled-Components, Json-Server, Tanstack Query,
        </p>
      </FS.FooterInfo>
      <FS.FooterInfo>
        <p>
          blog: <a href=""></a>
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/DecidedCard">
            https://github.com/DecidedCard
          </a>
        </p>
      </FS.FooterInfo>
    </FS.FooterStyle>
  );
};

export default Footer;

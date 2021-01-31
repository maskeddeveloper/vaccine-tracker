import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default (props) => {
  return (
    <Footer>
      {/* <Link href="https://instagram.com/mehdihamime">
        Built with love by Mehdi Hamime &nbsp;{" "}
      </Link> */}
      {/* <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        Powered by <Image src="/vercel.svg" alt="Vercel Logo" />
      </Link> */}
    </Footer>
  );
};

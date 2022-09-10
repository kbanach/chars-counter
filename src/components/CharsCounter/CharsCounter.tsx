import { useMemo, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  padding: 1rem;
`;

const Input = styled.input`
  padding: 0.3rem 1rem;
  margin: 1rem;
  text-align: center;
`;

const DigitsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 0.5rem;
`;

const Digit = styled.div`
  font-size: 1.5rem;
  display: block;
  height: 1.8rem;
  min-width: 1.5rem;
  margin: 0 0.3rem 0.4rem;
  padding: 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
`;
const Index = styled.div`
  font-size: 0.8rem;
`;

const CharWithIdx = ({ char, idx }: { char: string; idx: number }) => (
  <div>
    <Digit>{char}</Digit>
    <Index>{idx}</Index>
  </div>
);

export const CharsCounter = () => {
  const [str, setStr] = useState<string>("");

  const charsWithIdx = useMemo(() => {
    return str
      .split("")
      .map((char, idx) => (
        <CharWithIdx char={char} idx={idx + 1} key={char + idx} />
      ));
  }, [str]);

  return (
    <>
      <InputContainer>
        Paste string to char indexify:
        <br />
        <Input
          type="text"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />
      </InputContainer>
      <DigitsContainer>{charsWithIdx}</DigitsContainer>
    </>
  );
};

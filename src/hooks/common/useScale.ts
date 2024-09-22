import { atom, useRecoilState } from "recoil";

export const scaleAtom = atom({
  default: 1,
  key: "scale",
});

export const useScale = () => {
  const [scale, setScale] = useRecoilState(scaleAtom);

  return { scale, setScale };
};

import { db } from "../../src/app/config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Option {
  label: string;
  icon: JSX.Element;
  backgroundColor: string;
  color: string;
}

export const FetchOptionsData = async (): Promise<Option[]> => {
  const optionsRef = collection(db, "options");
  const optionsSnapshot = await getDocs(optionsRef);
  const optionsList: Option[] = [];

  optionsSnapshot.forEach((doc) => {
    const data = doc.data();
    optionsList.push({
      label: data.label,
      icon: data.icon, // Assuming you have icons as JSX elements stored
      backgroundColor: data.backgroundColor,
      color: data.color,
    });
  });

  return optionsList;
};

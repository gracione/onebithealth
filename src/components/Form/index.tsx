import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Form: React.FC = () => {
  const [height, setHeight] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o peso e altura"
  );
  const [imc, setImc] = useState<string | null>(null);
  const [textButton, setTextButton] = useState<string>("Calcular");

  const imcCalculator = () => {
    if (height && weight) {
      const calculatedImc =
        parseFloat(weight) / (parseFloat(height) * parseFloat(height));
      setImc(calculatedImc.toFixed(2).toString());
    }
  };

  const validateImc = () => {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  };

  return (
    <View>
      <View>
        <Text style={{ color: "black" }}>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          placeholderTextColor="gray"
          onChangeText={(text) => setHeight(text.replace(/[^0-9.]/g, ""))}
          value={height || ""}
        />
      </View>

      <View>
        <Text style={{ color: "black" }}>Peso</Text>
        <TextInput
          placeholder="Ex. 70"
          keyboardType="numeric"
          placeholderTextColor="gray"
          onChangeText={(text) => setWeight(text.replace(/[^0-9]/g, ""))}
          value={weight || ""}
        />
      </View>

      <Button title={textButton} onPress={validateImc} />

      {imc !== null && (
        <View>
          <Text style={{ color: "black" }}>{messageImc}</Text>
          <Text style={{ color: "black" }}>{imc}</Text>
        </View>
      )}
    </View>
  );
};

export default Form;

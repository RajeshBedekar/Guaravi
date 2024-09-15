import React, { useState, useCallback, useMemo } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { app } from "./FirebaseConfig";

// Initialize Firebase
const firestore = getFirestore(app);
const auth = getAuth(app);

export const Customer = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    stbNumber: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateForm = useCallback(() => {
    const newErrors: {
      mobileNumber?: string;
      stbNumber?: string;
    } = {};
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }
    if (
      !formData.stbNumber ||
      formData.stbNumber.trim() === "" ||
      !/\d/.test(formData.stbNumber)
    ) {
      newErrors.stbNumber = "Please enter a valid STB number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const saveToFirestore = useCallback(async () => {
    try {
      const userId = auth.currentUser?.uid || "anonymous";
      const docRef = await addDoc(collection(firestore, "customerFronts"), {
        ...formData,
        userId,
        timestamp: new Date(),
      });
      console.log(docRef);

      return docRef.id;
    } catch (error) {
      console.error("Error saving to Firestore: ", error);
      throw error;
    }
  }, [formData]);

  //   const sendToWhatsApp = useCallback(() => {
  //     const whatsappNumber = '+917770009455';
  //     const message = `Mobile Number: ${formData.mobileNumber}\nSTB Number: ${formData.stbNumber}`;
  //     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  //     window.open(url, '_blank', 'noopener,noreferrer');
  //   }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
      try {
        const docId = await saveToFirestore();
        //   sendToWhatsApp();
        toast({
          title: "Form submitted",
          description: `Your information has been received. Document ID: ${docId}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormData({ mobileNumber: "", stbNumber: "" });
      } catch (error) {
        console.error("Error submitting form: ", error);
        toast({
          title: "Error",
          description: "Failed to submit form. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateForm, saveToFirestore, toast]
  );

  const isFormValid = useMemo(() => {
    return formData.mobileNumber.length > 0 && formData.stbNumber.length > 0;
  }, [formData]);

  return (
    <Flex 
  h="100vh" 
  justify="center" 
  align="center" 
  bg="gray.50"
>
  <Card 
    w="full" 
    maxW="md" 
    p={8} 
    rounded="xl" 
    boxShadow="2xl"
    bg="white"
    borderRadius="lg"
    overflow="hidden"
  >
    <form onSubmit={handleSubmit}>
      <VStack spacing={6}>
        {/* Mobile Number Input */}
        <FormControl isInvalid={!!errors.mobileNumber}>
          <FormLabel 
            htmlFor="mobileNumber" 
            fontSize="lg" 
            fontWeight="bold"
            color="gray.700"
          >
            Mobile Number
          </FormLabel>
          <Input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            required
            placeholder="9999999999"
            value={formData.mobileNumber}
            onChange={handleChange}
            focusBorderColor="blue.500"
            size="lg"
            borderRadius="md"
            bg="gray.100"
            _hover={{ bg: "gray.200" }}
            _placeholder={{ color: "gray.500" }}
          />
          {errors.mobileNumber && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.mobileNumber}
            </Text>
          )}
        </FormControl>

        {/* STB Number Input */}
        <FormControl isInvalid={!!errors.stbNumber}>
          <FormLabel 
            htmlFor="stbNumber" 
            fontSize="lg" 
            fontWeight="bold"
            color="gray.700"
          >
            STB Number
          </FormLabel>
          <Input
            id="stbNumber"
            name="stbNumber"
            type="text"
            required
            placeholder="170ABCDEFG"
            value={formData.stbNumber}
            onChange={handleChange}
            focusBorderColor="blue.500"
            size="lg"
            borderRadius="md"
            bg="gray.100"
            _hover={{ bg: "gray.200" }}
            _placeholder={{ color: "gray.500" }}
          />
          {errors.stbNumber && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.stbNumber}
            </Text>
          )}
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          w="full"
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.700" }}
          _disabled={{ bg: "gray.400", cursor: "not-allowed" }}
          py={2}
          borderRadius="md"
          fontSize="lg"
          fontWeight="bold"
          isLoading={isSubmitting}
          isDisabled={isSubmitting || !isFormValid}
        >
          {isSubmitting ? "Submitting..." : "Next"}
        </Button>
      </VStack>
    </form>
  </Card>
</Flex>

  );
};

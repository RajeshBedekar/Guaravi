// Import required modules from firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Import the firestore module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-7pcz2Q3WzYIPmhMU0AODw1Alj2rIsb4",
  authDomain: "rajesh-a9b6c.firebaseapp.com",
  projectId: "rajesh-a9b6c",
  storageBucket: "rajesh-a9b6c.appspot.com",
  messagingSenderId: "98139337932",
  appId: "1:98139337932:web:74f4c73f41b77da8c5be69",
  measurementId: "G-KM7FBCD16W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(); // Get the Firestore instance

// Import Chakra UI components
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";

const Cable = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    stbNumber: "",
    customerNumber: "",
    address: "",
    installationPayment: "",
    phoneNumber: "",
    aadharNumber: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [cableData, setCableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Function to save the form data to Firebase Firestore
  const handleSave = async () => {
    try {
      // Save the formData to Firestore collection (assuming you have a collection named "cableData")
      await addDoc(collection(firestore, "cableData"), formData);
      alert("Data saved successfully!");
      // Fetch data again after saving to show the updated list
      fetchCableData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Function to fetch the data from Firebase Firestore
  const fetchCableData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "cableData"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchCableData();
  }, []);

  return (
    <Flex minHeight="100vh" justifyContent="center" alignItems="center">
      <Flex maxW="800px" p={4} boxShadow="md" borderRadius="md">
        <VStack spacing={4} p={4} bg="gray.200" borderRadius="md" mr={8}>
          <Heading as="h2" size="lg">
            Cable TV
          </Heading>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="Enter Customer Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>STB Number</FormLabel>
            <Input
              name="stbNumber"
              value={formData.stbNumber}
              onChange={handleInputChange}
              placeholder="Enter STB Number"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Number</FormLabel>
            <Input
              name="customerNumber"
              value={formData.customerNumber}
              onChange={handleInputChange}
              placeholder="Enter Customer Number"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter Address"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Installation Payment</FormLabel>
            <Input
              name="installationPayment"
              value={formData.installationPayment}
              onChange={handleInputChange}
              placeholder="Enter Payment"
            />
          </FormControl>
          <FormControl>
            <FormLabel>STB Number</FormLabel>
            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Aadhar Number</FormLabel>
            <Input
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              placeholder="Enter Aadhar Number"
            />
          </FormControl>
          {/* Rest of the form inputs */}
          {/* ... */}
          <Button colorScheme="blue" mt={4} onClick={handleSave}>
            Save
          </Button>
          {/* Add other buttons here */}
          {/* ... */}
        </VStack>

        {/* Data View */}
        <Box flex="3" p={4} bg="white" borderRadius="md">
          <Heading as="h1" size="xl" mb={6}>
            Cable TV Subscription Data
          </Heading>
          {/* Display the data as cards */}
          <DataView cableData={cableData} />
        </Box>
      </Flex>
    </Flex>
  );
};

// DataView component to display data as cards
const DataView = ({ cableData }) => {
  return (
    <VStack spacing={6}>
      {cableData.map((data, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4}>
          <Text pb={4} fontWeight={'600'} color={'green'} size="larger">{index+1}. {data.customerName}</Text>
          <FormControl>
            <FormLabel>STB Number</FormLabel>
            <Input isReadOnly value={data.stbNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Number</FormLabel>
            <Input isReadOnly value={data.customerNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input isReadOnly value={data.address} />
          </FormControl>
          <FormControl>
            <FormLabel>Installation Payment</FormLabel>
            <Input isReadOnly value={data.installationPayment} />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input isReadOnly value={data.phoneNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Aadhar Number</FormLabel>
            <Input isReadOnly value={data.aadharNumber} />
          </FormControl>
          {/* Display other form fields here */}
          {/* ... */}
          {data.photoUrl && <Image src={data.photoUrl} alt="Uploaded Photo" mt={4} />}
        </Box>
      ))}
    </VStack>
  );
};

export default Cable;

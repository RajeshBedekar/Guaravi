import { useState } from "react";
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, VStack, Image } from "@chakra-ui/react";

const Cable = () => {
  const [formData, setFormData] = useState({
    stbNumber: "",
    customerNumber: "",
    address: "",
    installationPayment: "",
    phoneNumber: "",
    aadharNumber: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <Flex maxW="800px" mx="auto" p={4}>
      {/* Sidebar */}
      <VStack spacing={4} p={4} bg="gray.200" borderRadius="md" mr={8}>
        <Heading as="h2" size="lg">
          Cable TV
        </Heading>
        <FormControl>
          <FormLabel>STB Number</FormLabel>
          <Input name="stbNumber" value={formData.stbNumber} onChange={handleInputChange} placeholder="Enter STB Number" />
        </FormControl>

        <FormControl>
          <FormLabel>Customer Number</FormLabel>
          <Input name="customerNumber" value={formData.customerNumber} onChange={handleInputChange} placeholder="Enter Customer Number" />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter Address" />
        </FormControl>

        <FormControl>
          <FormLabel>Installation Payment</FormLabel>
          <Input name="installationPayment" value={formData.installationPayment} onChange={handleInputChange} type="number" placeholder="Enter Installation Payment" />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} type="tel" placeholder="Enter Phone Number" />
        </FormControl>

        <FormControl>
          <FormLabel>Aadhar Number</FormLabel>
          <Input name="aadharNumber" value={formData.aadharNumber} onChange={handleInputChange} placeholder="Enter Aadhar Number" />
        </FormControl>

        {/* Handle image upload */}
        <FormControl>
          <FormLabel>Photo</FormLabel>
          <Input type="file" onChange={handleImageChange} />
        </FormControl>

        {/* Move buttons below the cards */}
        <Button colorScheme="blue" mt={4}>
          Save
        </Button>
        <Button colorScheme="blue" mt={2}>
          Search
        </Button>
        <Button colorScheme="blue" mt={2}>
          Update
        </Button>
        <Button colorScheme="blue" mt={2}>
          Home
        </Button>
      </VStack>

      {/* Data View */}
      <Box flex="3" p={4} bg="white" borderRadius="md">
        <Heading as="h1" size="xl" mb={6}>
          Cable TV Subscription Data
        </Heading>
        {/* Display the data here */}
        <Box>
          <FormControl>
            <FormLabel>STB Number</FormLabel>
            <Input isReadOnly value={formData.stbNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Number</FormLabel>
            <Input isReadOnly value={formData.customerNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input isReadOnly value={formData.address} />
          </FormControl>
          <FormControl>
            <FormLabel>Installation Payment</FormLabel>
            <Input isReadOnly value={formData.installationPayment} />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input isReadOnly value={formData.phoneNumber} />
          </FormControl>
          <FormControl>
            <FormLabel>Aadhar Number</FormLabel>
            <Input isReadOnly value={formData.aadharNumber} />
          </FormControl>
          {/* Display the uploaded photo here */}
          {selectedImage && <Image src={selectedImage} alt="Uploaded Photo" mt={4} />}
        </Box>
      </Box>
    </Flex>
  );
};

export default Cable;

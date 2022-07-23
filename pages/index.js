import React from "react";
import Head from "next/head";
import { Center, Image, Heading, VStack } from "native-base";
import { ColorModeSwitch } from "./../components/ColorModeSwitch";

export default function App() {
  return (
    <>
      <Head>
        <title>Trip The Fan</title>
      </Head>

      <Center flex={1} _dark={{ bg: "black.800" }} _light={{ bg: "white.10" }}>
        <VStack alignItems="center">
          <Heading
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            Looks like we're under
          </Heading>
          <Heading
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            construction!
          </Heading>

          <Image
            source={{ uri: "images/logo.svg" }}
            alt="Trip The Fan Logo"
            size={{
              base: "xs",
              md: "xl",
              lg: "2xl",
            }}
            resizeMode="contain"
          />
          <Heading
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            Check back later
          </Heading>
          <Heading
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            for something new!
          </Heading>
        </VStack>
        <ColorModeSwitch />
      </Center>
    </>
  );
}

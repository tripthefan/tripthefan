import React from "react";
import Head from "next/head";
import { Center, VStack, Heading, Text } from "native-base";
import { ColorModeSwitch } from "../components/ColorModeSwitch";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Trip The Fan</title>
      </Head>

      <Center flex={1} _dark={{ bg: "black.800" }} _light={{ bg: "white.10" }}>
        <VStack>
          <Heading
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            PRIVACY POLICY
          </Heading>
          <Text
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            Your privacy is important to us. It is Trip The Fan, Ltd. Co.'s
            policy to respect your privacy regarding any information we may
            collect from you across our website, http://tripthefan.com and
            http://tripthe.fan , and other sites we own and operate. We only ask
            for personal information when we truly need it to provide a service
            to you. We collect it by fair and lawful means, with your knowledge
            and consent. We also let you know why we’re collecting it and how it
            will be used. We only retain collected information for as long as
            necessary to provide you with your requested service. What data we
            store, we’ll protect within commercially acceptable means to prevent
            loss and theft, as well as unauthorized access, disclosure, copying,
            use or modification. We don’t share any personally identifying
            information publicly or with third-parties, except when required to
            by law. Our website may link to external sites that are not operated
            by us. Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies. You are free to
            refuse our request for your personal information, with the
            understanding that we may be unable to provide you with some of your
            desired services. Your continued use of our website will be regarded
            as acceptance of our practices around privacy and personal
            information. If you have any questions about how we handle user data
            and personal information, feel free to contact us. This policy is
            effective as of 1 May 2020.
          </Text>
        </VStack>
        <ColorModeSwitch />
      </Center>
    </>
  );
}

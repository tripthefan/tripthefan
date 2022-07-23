import React from "react";
import Head from "next/head";
import { Center, VStack, Heading, Text } from "native-base";
import { ColorModeSwitch } from "../components/ColorModeSwitch";

export default function TermsOfService() {
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
            TERMS OF SERVICE
          </Heading>
          <Text
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
          >
            We tried to keep it as simple as possibly. We don’t think
            over-complicated agreements help anyone. 1. Terms By accessing the
            website at http://tripthefan.com and http://tripthe.fan , you are
            agreeing to be bound by these terms of service, all applicable laws
            and regulations, and agree that you are responsible for compliance
            with any applicable local laws. If you do not agree with any of
            these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable
            copyright and trademark law. 2. Use License Permission is granted to
            temporarily download one copy of the materials (information or
            software) on Trip The Fan, Ltd. Co.'s website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not: modify or copy the materials; use the materials for any
            commercial purpose, or for any public display (commercial or
            non-commercial); attempt to decompile or reverse engineer any
            software contained on Trip The Fan, Ltd. Co.'s website; remove any
            copyright or other proprietary notations from the materials; or
            transfer the materials to another person or "mirror" the materials
            on any other server. This license shall automatically terminate if
            you violate any of these restrictions and may be terminated by Trip
            The Fan, Ltd. Co. at any time. Upon terminating your viewing of
            these materials or upon the termination of this license, you must
            destroy any downloaded materials in your possession whether in
            electronic or printed format. 3. Disclaimer The materials on Trip
            The Fan, Ltd. Co.'s website are provided on an 'as is' basis. Trip
            The Fan, Ltd. Co. makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, Trip
            The Fan, Ltd. Co. does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site. 4. Limitations In no
            event shall Trip The Fan, Ltd. Co. or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Trip The Fan, Ltd. Co.'s
            website, even if Trip The Fan, Ltd. Co. or a Trip The Fan, Ltd. Co.
            authorized representative has been notified orally or in writing of
            the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability
            for consequential or incidental damages, these limitations may not
            apply to you. 5. Accuracy of Materials The materials appearing on
            Trip The Fan, Ltd. Co.'s website could include technical,
            typographical, or photographic errors. Trip The Fan, Ltd. Co. does
            not warrant that any of the materials on its website are accurate,
            complete or current. Trip The Fan, Ltd. Co. may make changes to the
            materials contained on its website at any time without notice.
            However Trip The Fan, Ltd. Co. does not make any commitment to
            update the materials. 6. Links Trip The Fan, Ltd. Co. has not
            reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion
            of any link does not imply endorsement by Trip The Fan, Ltd. Co. of
            the site. Use of any such linked website is at the user's own risk.
            7. Modifications Trip The Fan, Ltd. Co. may revise these terms of
            service for its website at any time without notice. By using this
            website you are agreeing to be bound by the then current version of
            these terms of service. 8. Governing Law These terms and conditions
            are governed by and construed in accordance with the laws of
            Oklahoma and you irrevocably submit to the exclusive jurisdiction of
            the courts in that State or location.
          </Text>
        </VStack>
        <ColorModeSwitch />
      </Center>
    </>
  );
}

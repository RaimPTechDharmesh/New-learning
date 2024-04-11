import {Progress, Stack} from "@chakra-ui/react";

const ContactPage = () => {
    return (
      <>
        <h1>
            I am a Contact Page
        </h1>
          <Stack spacing={5}>
              <Progress hasStripe value={64} />
          </Stack>
      </>
    )
};
export default ContactPage;
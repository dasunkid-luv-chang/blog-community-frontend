import { Button } from "@mantine/core";
import { BsGithub } from "react-icons/bs";

export function GithubButton(props) {
  return (
    <Button
      {...props}
      leftIcon={<BsGithub size="1rem" />}
      sx={(theme) => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}

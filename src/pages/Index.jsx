import React, { useState } from "react";
import { Box, Heading, Textarea, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaBold, FaItalic, FaHeading, FaQuoteLeft, FaListUl, FaListOl, FaCode, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const [markdown, setMarkdown] = useState("");
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  const handleInsert = (startTag, endTag = "") => {
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = startTag + selectedText + endTag;
    setMarkdown(markdown.substring(0, start) + newText + markdown.substring(end));
    textarea.focus();
    textarea.setSelectionRange(start + startTag.length, end + startTag.length);
  };

  return (
    <Box p={4} minHeight="100vh" bg={bgColor} color={textColor}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">Markdown Editor</Heading>
        <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <Flex mb={4}>
        <IconButton icon={<FaBold />} onClick={() => handleInsert("**", "**")} aria-label="Bold" mr={2} />
        <IconButton icon={<FaItalic />} onClick={() => handleInsert("*", "*")} aria-label="Italic" mr={2} />
        <IconButton icon={<FaHeading />} onClick={() => handleInsert("# ")} aria-label="Heading" mr={2} />
        <IconButton icon={<FaQuoteLeft />} onClick={() => handleInsert("> ")} aria-label="Blockquote" mr={2} />
        <IconButton icon={<FaListUl />} onClick={() => handleInsert("- ")} aria-label="Unordered List" mr={2} />
        <IconButton icon={<FaListOl />} onClick={() => handleInsert("1. ")} aria-label="Ordered List" mr={2} />
        <IconButton icon={<FaCode />} onClick={() => handleInsert("```\n", "\n```")} aria-label="Code Block" />
      </Flex>
      <Textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} minHeight="400px" resize="vertical" />
    </Box>
  );
};

export default Index;

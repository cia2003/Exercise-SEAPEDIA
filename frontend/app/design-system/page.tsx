import { VBoxContainer } from "@/components/BoxContainer";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import RatingDisplay from "@/components/Rating";
import { Text, Link } from "@/components/Text";

export default () => {
  return (
    <div>
      <VBoxContainer>
        <RatingDisplay rating={0.8} />
        <RatingDisplay rating={1.5} />
        <RatingDisplay rating={2.2} />
        <RatingDisplay rating={3.4} />
        <RatingDisplay rating={4.9} />
        <RatingDisplay rating={5.0} />
      </VBoxContainer>
      <VBoxContainer>
        <Text variant="hero">Hero - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="heading-1">Heading 1 - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="heading-2">Heading 2 - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="heading-3">Heading 3 - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="heading-4">Heading 4 - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="heading-5">Heading 5 - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="base">Base - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="strong">Strong - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="button">Button - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="small">Small - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="small-button">Small Button - The quick brown fox jumps over the lazy dog</Text>
        <Link href="/">Link</Link>
      </VBoxContainer>
      <VBoxContainer>
        <Logo />
      </VBoxContainer>
      <VBoxContainer>
        <Button variant="solid">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="text">Button</Button>
      </VBoxContainer>
    </div>
  );
}
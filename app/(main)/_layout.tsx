import { BottomMenu } from "@/components";
import { Stack, useRouter, useSegments } from "expo-router";

export default function MainLayout() {
  const router = useRouter();
  const segments = useSegments();

  const handleChange = (key: string) => {
    if (key === "food") router.push("/(main)");
    else router.push(`/(main)/${key}` as any);
  };

  const active =
    (["offer", "search", "carts", "account"] as string[]).find((k) =>
      (segments as string[]).includes(k),
    ) ?? "food";

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <BottomMenu activeKey={active} onChange={handleChange} />
    </>
  );
}

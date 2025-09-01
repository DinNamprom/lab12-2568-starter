import { NavLink as RouterNavLink } from "react-router-dom";

import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar({userName, type}: SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Group p={10} > 
        <Indicator color="red" position="bottom-start">
          <Avatar src={"https://pm1.aminoapps.com/7211/1defb95af8f13c7788ee412dfc4173e2ccff9b04r1-500-429v2_hq.jpg"} radius={"xl"} size={"md"}/>
        </Indicator>
        <Text component={RouterNavLink} to="/">User: {userName}: {type} </Text>
      </Group>
    </Stack>
  );
}

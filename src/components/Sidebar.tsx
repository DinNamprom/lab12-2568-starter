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
          <Avatar src={"https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/461562627_890138619302549_6219974112833152126_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OZvgF4G8HfYQ7kNvwF7261N&_nc_oc=AdkOlL1bme1H1CENuLIYpFOBX_3HM3byd0fasCQBWVJxrUr6JLIhk6LEYppuQeHGk-4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&oh=03_Q7cD3QETcghCeXE61xetAlji1L88a1rN-s8YmeNsXtc7XHLu_w&oe=68DE2539"} radius={"xl"} size={"md"}/>
        </Indicator>
        <Text component={RouterNavLink} to="/">User: {userName}: {type} </Text>
      </Group>
    </Stack>
  );
}

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SquareUserRound } from 'lucide-react';
import Link from "next/link";

export function MenuNavbar() {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button
          className="relative"
          placeholder
          onPointerEnterCapture
          onPointerLeaveCapture
        >
          <div title="Login - Registro">
            <SquareUserRound color="#f0efef" />
          </div>
        </Button>
      </MenuHandler>
      <MenuList
        placeholder
        onPointerEnterCapture
        onPointerLeaveCapture
        className="absolute z-50 bg-div bg-opacity-95 w-28 shadow-none border-none"
      >
        <MenuItem
          placeholder
          onPointerEnterCapture
          onPointerLeaveCapture
          className="mt-2 font-medium"
        >
          <Typography
            variant="small"
            className="font-medium"
            placeholder
            onPointerEnterCapture
            onPointerLeaveCapture
          >

            <Link href="/register">  Crear Cuenta </Link>
          </Typography>

        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          placeholder
          onPointerEnterCapture
          onPointerLeaveCapture
          className="mt-2 font-medium"
        >

          <Typography
            variant="small"
            className="font-medium"
            placeholder
            onPointerEnterCapture
            onPointerLeaveCapture
          >
            <Link href="/login">  Iniciar Sesion </Link>

          </Typography>

        </MenuItem>

      </MenuList>
    </Menu>
  );
}
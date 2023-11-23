import { Biohazard, ImagePlus, LayoutDashboard } from "lucide-react";

export const SidebarData = [
  {
    id: 1,
    name: "dashboard",
    slug: "dashboard",
    icon: <LayoutDashboard />,
  },

  {
    id: 2,
    name: "Catalog",
    slug: "#",
    icon: <ImagePlus />,
    subMenu: [
      {
        id: 1,
        subMenuName: "category 1",
        slug: "catalogL1",
      },
      {
        id: 2,
        subMenuName: "category 2",
        slug: "catalogL2",
      },
      {
        id: 3,
        subMenuName: "category 3",
        slug: "catalogL3",
      },
    ],
  },
  {
    id: 3,
    name: "Chemical Editor",
    slug: "chemical",
    icon: <Biohazard />,
  },
];

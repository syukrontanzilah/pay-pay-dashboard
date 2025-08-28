import {
  Album,
  BadgePercent,
  BookText,
  BookUserIcon,
  ChartPie,
  HandCoins,
  History,
  Settings,
  UsersRound,
  Wallet,
  WalletCards,
} from "lucide-react";

export const MenuAdmin = [
  {
    title: "Dashboard",
    items: [
      {
        icon: <ChartPie size={18} />,
        label: "Dashboard",
        href: "/dashboard",
        visible: ["admin", "user", "client", ""],
        // submenu: [
        //   {
        //     title: "PPOB",
        //     href: "/dashboard",
        //   },
        // ],
      },
      {
        icon: <UsersRound size={18} />,
        label: "Manajemen User",
        href: "/users",
        visible: ["admin", "user"],
        // submenu: [
        //   {
        //     title: "Users",
        //     href: "/manajemenuser/users",
        //   },
        // ],
      },
      {
        icon: <BookUserIcon size={18} />,
        label: "Manajemen Customer",
        href: "#",
        visible: ["admin", "user", "customer"],
        submenu: [
          {
            title: "Customers",
            href: "/customers/customers",
          },
          {
            title: "KYC",
            href: "/customers/kyc",
          },
        ],
      },

      {
        icon: <Album size={18} />,
        label: "Master",
        href: "#",
        visible: ["admin", "user"],
        submenu: [
          {
            title: "Admin Fee",
            href: "/master/adminfee",
          },
          {
            title: "Merchant",
            href: "/master/merchant",
          },
          {
            title: "Partner",
            href: "/master/partner",
          },
        ],
      },
      {
        icon: <WalletCards size={18} />,
        label: "PPOB",
        href: "#",
        visible: ["admin", "user"],
        submenu: [
          {
            title: "Produk",
            href: "/ppob/produk",
          },
          {
            title: "Menu PPOB",
            href: "/ppob/menuppob",
          },
          {
            title: "Kategori Produk",
            href: "/ppob/kategoriproduk",
          },
          {
            title: "Phone Prefix",
            href: "/ppob/phoneprefix",
          },
        ],
      },
      {
        icon: <HandCoins size={18} />,
        label: "Balance Management",
        href: "/balance",
        visible: ["admin"],
      },
      {
        icon: <Wallet size={18} />,
        label: "Transaksi",
        href: "#",
        visible: ["admin"],
        submenu: [
          {
            title: "Transaksi PPOB",
            href: "/transaksi/transaksippob",
          },
          {
            title: "Transaksi Wallet",
            href: "/transaksi/transaksiwallet",
          },
        ],
      },
      {
        icon: <BadgePercent size={18} />,
        label: "Program",
        href: "#",
        visible: ["admin"],
        submenu: [
          {
            title: "Referal",
            href: "/program/referal",
          },
          {
            title: "Voucher",
            href: "/program/voucher",
          },
        ],
      },
      // {
      //   icon: <HandCoins size={18} />,
      //   label: "Account Pooling",
      //   href: "/accountpooling",
      //   visible: ["admin"],
      // },
      {
        icon: <History size={18} />,
        label: "Histori",
        href: "#",
        visible: ["admin", "user"],
        submenu: [
          {
            title: "Histori Cash",
            href: "/histori/historicash",
          },
          {
            title: "Hitori Koin",
            href: "/histori/historikoin",
          },
          {
            title: "Histori Poin",
            href: "/histori/historipoin",
          },
        ],
      },
    ],
  },
  {
    title: "General Settings",
    items: [
      {
        icon: <BookText size={18} />,
        label: "Utilitas",
        href: "#",
        visible: ["admin"],
        submenu: [
          {
            title: "Syarat & Ketentuan",
            href: "/utilitas/syaratketentuan",
          },
          {
            title: "Kebijakan Privasi",
            href: "/utilitas/kebijakanprivasi",
          },
        ],
      },
      {
        icon: <Settings size={18} />,
        label: "Settings",
        href: "#",
        visible: ["admin", "user", "client"],
        submenu: [
          // {
          //   title: "API Key",
          //   href: "/settings/apikey",
          // },
          {
            title: "Banner",
            href: "/settings/banner",
          },
          {
            title: "Maintenance Mode",
            href: "/settings/maintenancemode",
          },
          {
            title: "Pengaturan Poin",
            href: "/settings/pengaturanpoin",
          },
          {
            title: "Pengaturan Koin",
            href: "/settings/pengaturankoin",
          },
          {
            title: "Kontak",
            href: "/settings/kontak",
          },
        ],
      },
    ],
  },
];

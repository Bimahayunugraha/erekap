import { Squares2X2Icon, IdentificationIcon, BookOpenIcon, UserPlusIcon, ClipboardDocumentIcon, FlagIcon } from "@heroicons/react/24/outline";

export const isAuthorizedAdmin = [
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: <Squares2X2Icon className="ml-2 h-6 w-6 transition duration-75" />,
	},
	{
		name: "Siswa",
		path: "/admin/data/siswa",
		icon: <IdentificationIcon className="ml-2 h-6 w-6 transition duration-75" />,
	},
	{
		name: "Mata Pelajaran",
		path: "/admin/data/mata-pelajaran",
		icon: <BookOpenIcon className="ml-2 h-6 w-6 transition duration-75" />,
	},
	{
		name: "Guru",
		path: "/admin/data/guru",
		icon: <UserPlusIcon className="ml-2 h-6 w-6 transition duration-75" />,
	},
	{
		name: "Pelajaran Diampu",
		path: "/admin/data/pelajaran/diampu",
		icon: <ClipboardDocumentIcon className="ml-2 h-6 w-6 transition duration-75" />,
	},
];

export const isAuthorizedGuru = [
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: <Squares2X2Icon className="ml-2 h-6 w-6 transition duration-75" />,
	},
	{
		name: "Penilaian",
		path: "/guru/penilaian",
		icon: <FlagIcon className="ml-2 h-6 w-6 transition duration-75" />,
	},
];

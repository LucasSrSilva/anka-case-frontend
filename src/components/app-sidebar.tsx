import { User, UserPlus } from "lucide-react";
import Image from "next/image";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Clientes",
        url: "#",
        icon: User,
    },
    {
        title: "Prospects",
        url: "#",
        icon: UserPlus,
    },
    {
        title: "Consolidação",
        url: "#",
        icon: () => (
            <Image
                src="/icons/consolidation.svg"
                alt="Consolidação"
                width={16}
                height={16}
            />
        ),
    },
    {
        title: "CRM",
        url: "#",
        icon: () => (
            <Image
                src="/icons/crm.svg"
                alt="CRM"
                width={16}
                height={16}
            />
        ),
    },
    {
        title: "Captação",
        url: "#",
        icon: () => (
            <Image
                src="/icons/captation.svg"
                alt="Captação"
                width={16}
                height={16}
            />
        ),
    },
    {
        title: "Financeiro",
        url: "#",
        icon: () => (
            <Image
                src="/icons/finance.svg"
                alt="Financeiro"
                width={16}
                height={16}
            />
        ),
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="none" className="text-[#9f9f9f]">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center justify-center py-10"><Image
                        src="/logo.png"
                        alt="Anka"
                        width={180}
                        height={60}
                    /></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
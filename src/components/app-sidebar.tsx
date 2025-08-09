import { ChartLine, History, LayoutDashboard, User, UserPlus } from "lucide-react";
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
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const items = [
    {
        title: "Clientes", icon: User, subItens: [
            { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
            { title: "Projeção", url: "/projection", icon: ChartLine },
            { title: "Histórico", url: "/history", icon: History },
        ]
    },
    {
        title: "Prospects",
        icon: UserPlus,
        subItens: []
    },
    {
        title: "Consolidação",
        subItens: [],
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
        subItens: [],
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
        subItens: [],
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
        subItens: [],
        icon: () => (
            <Image
                src="/icons/finance.svg"
                alt="Financeiro"
                width={16}
                height={16}
            />
        ),
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="none" className="text-[#9f9f9f]">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center justify-center py-10">
                        <Image
                            src="/logo.png"
                            alt="Anka"
                            width={180}
                            height={60}
                        />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <Collapsible className="group" defaultOpen>
                                        <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer px-2 py-1">
                                            <div className="flex items-center gap-2">
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </div>
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            {item.subItens && item.subItens.length > 0 ? (
                                                <SidebarMenu className="pl-8">
                                                    {item.subItens.map((subItem) => (
                                                        <SidebarMenuItem key={subItem.title}>
                                                            <SidebarMenuButton asChild>
                                                                <a href={subItem.url}><subItem.icon />{subItem.title}</a>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                                </SidebarMenu>
                                            ) : null}
                                        </CollapsibleContent>
                                    </Collapsible>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
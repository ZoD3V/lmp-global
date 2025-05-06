import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { router } from "@inertiajs/react";

const Menu = ({ menuData }) => {
    const filteredMenuData = menuData?.filter(
        (item) => item.products?.length > 0
    );

    const handleRouter = (e) => {
        router.visit(`/product/${e.id}`);
    };

    const renderMenu = (items) => {
        return items?.map((item, index) => {
            if (item.products?.length) {
                return (
                    <DropdownMenuSub key={`${item.id}-${index}`}>
                        <DropdownMenuSubTrigger className="cursor-pointer">
                            <span className="flex items-center justify-between w-full">
                                {item.name}
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent
                            side="right"
                            align="start"
                            className="ml-1 min-w-[8rem]"
                        >
                            {renderMenu(item.products)}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                );
            }

            return (
                <DropdownMenuItem
                    key={`${item.id}-${index}`}
                    className="cursor-pointer"
                    onClick={() => handleRouter(item)}
                >
                    {item.name}
                </DropdownMenuItem>
            );
        });
    };

    return (
        <div className="w-40 md:w-1/2">
            {filteredMenuData?.map((item, index) => (
                <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild className="outline-none">
                        <button className="w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer">
                            <span>{item.name}</span>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="right"
                        align="start"
                        className="w-56"
                    >
                        {renderMenu(item.products)}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
};

export default Menu;

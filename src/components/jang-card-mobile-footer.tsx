import { TeamsContent } from "@/components/teams-content";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { CardDescription, CardContent } from "@/components/ui/card";

export default function JangCardMobileFooter() {
    return (

        <CardContent>
            <CardDescription className="text-center">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    Developing Cybersecurity tools at
                </AnimatedShinyText>
            </CardDescription>
            <TeamsContent isMobile={true} />
            <div className="flex w-[100%] text-xxs text-center justify-center">
                *Starting January 2025
            </div>
        </CardContent>

    );
}

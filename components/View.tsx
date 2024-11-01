import Ping from "@/components/Ping"
import { STARTUP_VIEWS_QUERY } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import { writeClient } from "@/sanity/lib/write-client"
import { unstable_after as after } from "next/server"

const View = async ({ id }: { id: string }) => {

    const totalViews = (await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id }))?.views || 1

        after(async () => await writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit()
    );

return (
    <div className="view-container">
        <div className="absolute -top-0 -right-0">
            <Ping />
        </div>
        <p className="view-text">
            <span className="font-black">{totalViews} {Number(totalViews) == 1 ? "View" : "Views"}</span>
        </p>
    </div>
)
}

export default View
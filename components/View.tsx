import Ping from "@/components/Ping"
import { STARTUP_VIEWS_QUERY } from "@/lib/queries"
import { client } from "@/sanity/lib/client"

const View = async ({ id }: { id: string }) => {

    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id })

        // TODO: Update views when visitor

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
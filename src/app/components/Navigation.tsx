import { PrismicLink, PrismicText } from '@prismicio/react'
import { NavigationItemSlice } from "@/prismicio-types";

export function Navigation({ navigationItems }: {navigationItems: NavigationItemSlice[]}) {
    return (
    <nav>
        <ul>
            {/* Renders top-level links. */}
            {navigationItems.map((navigationItem) => {
                return (
                    <li key={navigationItem.id}>
                        <PrismicLink field={navigationItem.primary.link}>
                            {navigationItem.primary.name}
                        </PrismicLink>

                        {/* Renders child links, if present. */}
                        {navigationItem.items.length > 0 && (
                            <ul>
                                {navigationItem.items.map((item) => {
                                    return (
                                        <li key={JSON.stringify(item)}>
                                            <PrismicLink field={item.child_link}>
                                                {item.child_name}
                                            </PrismicLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    </nav>
    )
}

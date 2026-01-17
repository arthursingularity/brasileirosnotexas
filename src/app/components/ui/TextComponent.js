export default function TextComponent({ type, content, className }) {
    const textVariants = {
        h1: {
            tag: "h1",
            class: "text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-textPrimary"
        },
        h2: {
            tag: "h2",
            class: "text-3xl md:text-4xl font-bold leading-snug text-textPrimary"
        },
        h3: {
            tag: "h3",
            class: "text-2xl md:text-3xl font-medium leading-snug text-textPrimary"
        },
        sectionTitle: {
            tag: "h2",
            class: "font-bold text-[32px] lg:text-[40px] text-textPrimary leading-tight"
        },
        lead: {
            tag: "p",
            class: "text-lg font-regular md:text-xl leading-relaxed text-textSecondary"
        },
        body: {
            tag: "p",
            class: "text-base font-regular leading-relaxed text-textSecondary"
        },
        label: {
            tag: "label",
            class: "text-sm font-medium text-textTertiary"
        }
    }

    const Component = textVariants[type]?.tag || "p"

    return (
        <Component className={`${textVariants[type]?.class} ${className}`}>
            {content}
        </Component>
    )
}

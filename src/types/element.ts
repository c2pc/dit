export type Element = {
    name: string;
    position: Position;
    defaultIcon: string;
    hoverIcon: string;
    description: string;
    header: string;
    onClick: () => any;
    tooltipPosition: Position;
    tooltipIcon: string;
    defaultIconStyle?: any;
    hoverIconStyle?: any;
    disabled?: boolean;
}
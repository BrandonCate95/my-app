export interface SyntheticEvent {
    target: SyntheticEventTarget
}

interface SyntheticEventTarget {
    value: string | number
}
import {TEvent} from "../types/TEvent";

// event all action
export const eventAllRequest = () => ({
    type: '@event-all/requested'
})

export const eventAllSuccess = (events: TEvent[]) => ({
    type: '@event-all/success',
    payload: {
        events
    }
})

export const eventAllFailed = (error: any) => ({
    type: '@event-all/failed',
    payload: {
        error
    }
})

// event create action
export const eventCreateRequested  = (event: TEvent) => ({
    type: '@event-create/requested',
    payload: {
        event
    }
})

export const eventCreateSuccess  = (event: TEvent) => ({
    type: '@event-create/success',
    payload: {
        event
    }
})

export const eventCreateFailed = (error: any) => ({
    type: '@event-create/failed',
    payload: {
        error
    }
})

// event create action
export const eventUpdateRequested  = (event: TEvent) => ({
    type: '@event-update/requested',
    payload: {
        event
    }
})

export const eventUpdateSuccess  = (event: TEvent) => ({
    type: '@event-update/success',
    payload: {
        event
    }
})

export const eventUpdateFailed = (error: any) => ({
    type: '@event-update/failed',
    payload: {
        error
    }
})

// event delete action
export const eventDeleteRequested  = (id:string) => ({
    type: '@event-delete/requested',
    payload: {
        id
    }
})

export const eventDeleteSuccess  = (id:any) => ({
    type: '@event-delete/success',
    payload: {
        id
    }
})

export const eventDeleteFailed = (error: any) => ({
    type: '@event-delete/failed',
    payload: {
        error
    }
})
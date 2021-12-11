import {Reducer} from "redux";
import {TEvent} from "../../types/TEvent";

const initialState: {
    events: TEvent[] ,
    success: any,
    loading: boolean,
    error: any
} = {
    events: [],
    success: null,
    loading: false,
    error: undefined
}

export const eventReducer:Reducer = (state = initialState, action) => {
    switch (action.type) {
        // event all action
        case '@event-all/requested': {
            return { ...state, error: undefined, loading: true }
        }

        case '@event-all/success': {
            return { ...state, events: action.payload.events,  loading: false }
        }

        case '@event-all/failed': {
            return { ...state, error: action.payload.error, loading: false }
        }

        // create actions
        case '@event-create/requested': {
            return { ...state, error: undefined, loading: true }
        }

        case '@event-create/success': {
            return { ...state, events: [ ...state.events, action.payload.event ],  loading: false, error: null }
        }

        case '@event-create/failed': {
            return { ...state, error: action.payload.error, loading: false }
        }

        // update actions
        case '@event-update/requested': {
            return { ...state, error: undefined, loading: true }
        }

        case '@event-update/success': {
            const events: TEvent[] = state.events.map((event:TEvent) => (
                event.id == action.payload.event.id ? action.payload.event : event
            ))

            return { ...state, events, error: null, loading: false }
        }

        case '@event-update/failed': {
            return { ...state, error: action.payload.error, loading: false }
        }

        // delete actions
        case '@event-delete/requested': {
            return { ...state, error: undefined, loading: true}
        }

        case '@event-delete/success': {
            const events: TEvent[] = state.events.filter((event:TEvent) => (
                event.id != action.payload.event.id
            ))

            return { ...state, events , error: null, loading: false }
        }

        case '@event-delete/failed': {
            return { ...state, error: action.payload.error, loading: false }
        }

        default: {
            return { ...state }
        }
    }
}

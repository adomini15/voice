// external
import { call, put, takeEvery } from "redux-saga/effects";
import {FirebaseError} from "firebase/app";

// internal
import {FormatFirebaseError} from "../../utils/errors/FormatFirebaseError";
import {
    eventAllFailed,
    eventAllSuccess,
    eventCreateFailed,
    eventCreateSuccess, eventDeleteFailed, eventDeleteSuccess, eventUpdateFailed,
    eventUpdateSuccess
} from "../../actions/eventActions";
import {EventService} from "../../services/EventService";
import {FirebaseEventRepository} from "../../repos/event/FirebaseEventRepository";
import {TEvent} from "../../types/TEvent";

const eventService = EventService.Instance(new FirebaseEventRepository());

function* OnAllEvent(action: any) : any {
    try {

        const feedback = yield call(eventService.getAll);

        yield put(eventAllSuccess(feedback));

    } catch (error) {
        if (error instanceof FirebaseError) {
            yield put(eventAllFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

function* OnCreateEvent (action: any) : any {
    try {
        const newEvent: TEvent = action.payload.event as TEvent;

        const feedback = yield call(eventService.create, newEvent);

        yield put(eventCreateSuccess(feedback));

    } catch (error) {
        if (error instanceof FirebaseError) {
            yield put(eventCreateFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

function* OnUpdateEvent (action: any) : any {
    try {
        const updatedEvent: TEvent = action.payload.event as TEvent;

        const feedback = yield call(eventService.update, updatedEvent);

        yield put(eventUpdateSuccess(feedback));

    }  catch (error) {
        if (error instanceof FirebaseError) {
            yield put(eventUpdateFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

function* OnDeleteEvent (action:any) : any {
    try {
        const deletedEvent: string = action.payload.id;

        const feedback:string = yield call(eventService.delete, deletedEvent);

        yield put(eventDeleteSuccess(feedback))
    } catch (error) {
        if (error instanceof FirebaseError) {
            yield put(eventDeleteFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

export function*  watcherEventSaga() {
    yield takeEvery('@event-create/requested', OnCreateEvent);
    yield takeEvery('@event-all/requested', OnAllEvent);
    yield takeEvery('@event-update/requested', OnUpdateEvent)
    yield takeEvery('@event-delete/requested', OnDeleteEvent)
}


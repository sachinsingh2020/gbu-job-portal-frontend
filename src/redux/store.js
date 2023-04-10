import { configureStore } from "@reduxjs/toolkit";
import { postAppliedReducer } from "./reducers/appliedForReducer";
import { interNationalConferenceReducer, nationalConferenceReducer } from "./reducers/conferenceReducer";
import { educationGraduationReducer, educationMphilReducer, educationPhdReducer, educationPostGraduationReducer } from "./reducers/educationReducer";
import { generalReducer } from "./reducers/generalReducer";
import { personalReducer } from "./reducers/personalReducer";
import { phdDetailsReducer } from "./reducers/phdDetailsReducer";
import { interNationalResearchReducer, nationalResearchReducer } from "./reducers/researchReducer";
import { teachingReducer } from "./reducers/teachingReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        personal: personalReducer,
        postApplied: postAppliedReducer,
        educationGraduation: educationGraduationReducer,
        educationPostGraduation: educationPostGraduationReducer,
        educationMphil: educationMphilReducer,
        educationPhd: educationPhdReducer,
        phdDetails: phdDetailsReducer,
        teaching: teachingReducer,
        nationalResearch: nationalResearchReducer,
        interNationalResearch: interNationalResearchReducer,
        nationalConference: nationalConferenceReducer,
        interNationalConference: interNationalConferenceReducer,
        general: generalReducer,
    }
});

export default store;

export const server = "https://gbu-job-portal-backend.vercel.app/api/v1"
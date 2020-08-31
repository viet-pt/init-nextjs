import axios from './axios';
export const fetchSendQuestion = (data) => {
    return axios.post("/api/question/send", { ...data })
}
export const fetchSendQuestionContact = (data) => {
    return axios.post("/api/question/contact", { ...data })
}
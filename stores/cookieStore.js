import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CookieStore {
  cookies = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCookies = async () => {
    try {
      const response = await instance.get("/cookies");
      this.cookies = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchCookies: ", error);
    }
  };

  getCookieById = (cookieId) =>
    this.cookies.find((cookie) => cookie.id === cookieId);
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;

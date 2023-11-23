import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

class Client {
  auth = {
    login: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.login, { ...params }),
  };
  catalog = {
    addCatalogL1: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL1, { ...params }),
    catalogL1: () => HttpClient.get(API_ENDPOINTS.catalogsL1),
    singleCatalogL1: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL1, { id: id }),
    updateCatalogL1: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL1, { ...params }),
    deleteCatalogL1: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL1, { id: id }),
    addCatalogL2: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL2, { ...params }),
    catalogL2: () => HttpClient.get(API_ENDPOINTS.catalogsL2),
    singleCatalogL2: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL2, { id: id }),
    updateCatalogL2: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL2, { ...params }),
    deleteCatalogL2: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL2, { id: id }),
    addCatalogL3: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL3, { ...params }),
    catalogL3: () => HttpClient.get(API_ENDPOINTS.catalogL3),
    singleCatalogL3: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL3, { id: id }),
    updateCatalogL3: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL3, { ...params }),
    deleteCatalogL3: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL3, { id: id }),
  };
  chemical = {
    addChemical: (params) => HttpClient.post(API_ENDPOINTS.addChemical, params),
    chemical: () => HttpClient.get(API_ENDPOINTS.chemicals),
    singleChemical: (id) =>
      HttpClient.post(API_ENDPOINTS.singleChemical, { id: id }),
    updateChemical: (params) =>
      HttpClient.post(API_ENDPOINTS.updateChemical, params),
    deleteChemical: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteChemical, { id: id }),
  };
}

const client = new Client();

export default client;

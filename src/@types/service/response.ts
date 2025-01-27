interface ApiResponse<T> {
  data: T;
  datalist?: T[];
  message: string;
  responseCode: number;
  timeStamp: string;
  totalRecords: number;
  totalPages: number;
}

interface ApiErrorResponse {
  response?: {
    data?: {
      error: {
        errorCode: number;
        errorMessage: string;
      };
      responseCode: number;
      timeStamp: string;
    };
  };
}

interface TableResponse<T> {
  count: number;
  page_count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export type { ApiErrorResponse, ApiResponse, TableResponse };

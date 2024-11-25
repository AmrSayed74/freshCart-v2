import axios from "axios";
import { BASE_URL } from "../services/baseUrl";
const headers = {
  "Content-Type": "application/json",
  get token() {
    return localStorage.getItem("userToken");
  },
};
export async function GET(
  request,
  endpoint,
  errorMessage = "Failed to fetch data",
  id
) {
  console.log(request);
  try {
    const url = `${BASE_URL}/${endpoint}${id ? `/${id}` : ""}`;

    if (request === axios) {
      const res = await request.get(url, {
        headers: { ...headers },
      });
      return res.data;
    }

    const res = await request(url, {
      headers: { ...headers },
    });

    if (!res.ok) throw new Error(errorMessage);

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || errorMessage);
  }
}

export async function POST(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data"
) {
  console.log(request, endpoint, method, values, headers, errorMessage);
  const url = `${BASE_URL}/${endpoint}`;

  if (request === axios) {
    const res = await request.post(url, values || null, {
      headers: { ...headers },
    });
    return res.data;
  } else {
    const res = await request(url, {
      headers: { ...headers },
      method: method,
      body: values ? JSON.stringify(values) : "",
    });

    if (!res.ok) throw new Error(errorMessage);
    const data = await res.json();
    return data;
  }
}

export async function AUTH(request, endpoint, method, values) {
  // console.log(request, endpoint, method, values, headers);
  const url = `${BASE_URL}/auth/${endpoint}`;

  if (request === axios) {
    const res = await request.post(url, values || null, {
      headers: { ...headers },
    });
    return res.data;
  } else {
    const res = await request(url, {
      headers: { ...headers },
      method: method,
      body: values ? JSON.stringify(values) : "",
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
}

export async function PUT(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data",
  auth,
  cart
) {
  const url = `${BASE_URL}/${auth ? `auth/${endpoint}` : ""}${
    cart ? `${endpoint}${values.productId ? `/${values.productId}` : ""}` : ""
  }`;

  if (request === axios) {
    const res = await request.put(url, values || {}, {
      headers: { ...headers },
    });
    return res.data;
  } else {
    // Using fetch for the PUT request
    const res = await request(url, {
      method: method,
      headers: { ...headers },
      body: values ? JSON.stringify(values) : null,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || errorMessage);
    }

    const data = await res.json();
    console.log(data);
    return data;
  }
}

export async function DELETE(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data"
) {
  const url = `${BASE_URL}/${endpoint}${
    values.productId ? `/${values.productId}` : ""
  }`;

  if (request === axios) {
    // Using axios for DELETE
    const res = await request.delete(url, {
      headers: { ...headers },
    });
    return res.data;
  } else {
    // Using fetch for DELETE
    const res = await request(url, {
      method: method,
      headers: { ...headers },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || errorMessage);
    }

    const data = await res.json();
    return data;
  }
}

//! IN CASE IF I WANT TO COMBINE POST AND AUTH FUNCTIONS IN ONE FUNCTION ❤️
//! usePostAuth.js => HANDLE THIS REQUEST
/*export async function POSTAUTH(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data",
  auth,
  cart
) {
  console.log("Values being sent:", values);
  const url = `${BASE_URL}${auth ? "/auth" : ""}${
    cart ? "/cart" : ""
  }/${endpoint}`;
  console.log("Request URL:", url);
  if (request === axios) {
    const res = await request.post(url, values, {
      headers: { ...headers },
    });
    return res.data;
  } else {
    const res = await request(url, {
      headers: { ...headers },
      method: method,
      body: values ? JSON.stringify(values) : "",
    });
    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message || errorMessage);
    }
    const data = await res.json();
    return data;
  }
}
*/

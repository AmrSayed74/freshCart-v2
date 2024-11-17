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
  const res = await request(`${BASE_URL}/${endpoint}${id ? `/${id}` : ""}`, {
    headers: { ...headers },
  });

  if (!res.ok) throw new Error(errorMessage);
  const data = await res.json();
  return data;
}

// export const GET = async (
//   request,
//   endpoint,
//   errorMessage = "Failed to fetch data",
//   id
// ) => {
//   try {
//     const res = await request(`${BASE_URL}/${endpoint}${id ? `/${id}` : ""}`, {
//       headers: { ...headers },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error || errorMessage);
//   }
// };

export async function POST(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data"
) {
  // console.log(request, endpoint, method, values, headers, errorMessage);
  const res = await request(`${BASE_URL}/${endpoint}`, {
    headers: { ...headers },
    method: method,
    body: values ? JSON.stringify(values) : "",
  });
  if (!res.ok) throw new Error(errorMessage);
  const data = await res.json();
  return data;
}

export async function AUTH(request, endpoint, method, values) {
  console.log(request, endpoint, method, values, headers);
  const res = await request(`${BASE_URL}/auth/${endpoint}`, {
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

// export const AUTH = async (
//   request,
//   endpoint,
//   method,
//   values = {},
//   token = null
// ) => {
//   try {
//     const response = await request(`${BASE_URL}/auth/${endpoint}`, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         ...(token && { Authorization: `Bearer ${token}` }),
//       },
//       body: values ? JSON.stringify(values) : null,
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error in AUTH function:", error.message);
//     throw error;
//   }
// };

export async function PUT(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data",
  auth,
  cart
) {
  const res = await request(
    `${BASE_URL}/${auth ? `auth/${endpoint}` : ""}${
      cart ? `${endpoint}${values.productId ? `/${values.productId}` : ""}` : ""
    }`,
    {
      method: method,
      headers: { ...headers },
      body: values && JSON.stringify(values || { count: values.count }),
    }
  );
  if (!res.ok) throw new Error(errorMessage);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function DELETE(
  request,
  endpoint,
  method,
  values,
  errorMessage = "Failed to fetch data"
) {
  const res = await request(
    `${BASE_URL}/${endpoint}${values.productId ? `/${values.productId}` : ""}`,
    {
      method: method,
      headers: { ...headers },
    }
  );
  if (!res.ok) {
    throw new Error(errorMessage);
  }
  const data = await res.json();

  return data;
}

// export async function DELETEe(
//   request,
//   endpoint,
//   method,
//   values = {},
//   errorMessage = "Failed to fetch data"
// ) {
//   const url = `${BASE_URL}/${endpoint}${values.productId ? `/${values.productId}` : ""}`;
//   const res = await request(url, {
//     method: method,
//     headers: { ...headers },
//   });

//   if (!res.ok) {
//     throw new Error(errorMessage);
//   }

//   const data = await res.json();
//   return data;
// }

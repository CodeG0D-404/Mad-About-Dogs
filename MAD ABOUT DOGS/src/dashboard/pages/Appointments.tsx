
import { useEffect, useState } from "react";

import "./CSS/Appointments.css";

interface Appointment {
  _id: string;
  petParentName: string;
  petName: string;
  service: string;
  preferredDate: string;
  status: string;
}

const Appointments = () => {
  const [appointments, setAppointments] =
    useState<Appointment[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [statusFilter, setStatusFilter] =
    useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments =
    async () => {
      try {
        const response =
  await fetch(
    `${import.meta.env.VITE_API_URL}/appointments`,
    {
      credentials: "include",
    }
  );

        const data =
          await response.json();

        if (data.success) {
          setAppointments(
            data.data
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  const updateStatus =
    async (
      id: string,
      status: string
    ) => {
      try {
        await fetch(
  `${import.meta.env.VITE_API_URL}/appointments/${id}/status`,
  {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  }
);

        fetchAppointments();
      } catch (error) {
        console.error(error);
      }
    };

  const filteredAppointments =
    statusFilter
      ? appointments.filter(
          (item) =>
            item.status ===
            statusFilter
        )
      : appointments;

  return (
    <div className="appointments">
      <div className="appointments-header">
        <div>
          <h1>
            Appointments
          </h1>

          <p>
            Manage all
            appointments.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
        >
          <option value="">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Confirmed">
            Confirmed
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="Cancelled">
            Cancelled
          </option>
        </select>
      </div>

      <div className="appointments-card">
        {loading ? (
          <div className="loading">
            Loading...
          </div>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>
                  Pet Parent
                </th>
                <th>Pet</th>
                <th>
                  Service
                </th>
                <th>Date</th>
                <th>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map(
                (
                  appointment
                ) => (
                  <tr
                    key={
                      appointment._id
                    }
                  >
                    <td>
                      {
                        appointment.petParentName
                      }
                    </td>

                    <td>
                      {
                        appointment.petName
                      }
                    </td>

                    <td>
                      {
                        appointment.service
                      }
                    </td>

                    <td>
                      {new Date(
                        appointment.preferredDate
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      <select
                        className="status-select"
                        value={
                          appointment.status
                        }
                        onChange={(
                          e
                        ) =>
                          updateStatus(
                            appointment._id,
                            e.target
                              .value
                          )
                        }
                      >
                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Confirmed">
                          Confirmed
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>
                      </select>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Appointments;
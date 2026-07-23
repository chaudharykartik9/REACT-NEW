import SearchBar from "./SearchBar";
import TopBarElement from "./TopBarElement";
import TopBarEleWithDropdown from "./TopBarEleWithDropdown";

import {
  Search,
  House,
  Workflow,
  BriefcaseBusiness,
  Mail,
  Bell,
  User,
  Grid2x2,
} from "lucide-react";

const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAgVBMVEX///8CiNEAiNEAhM+aw+H0+foAgc4Ah9KJuttwrds0j9A0jtEAhsuLut////0AgdD///mkyubp8/S+2uzJ4ewAe8vt+fiRvuDe7PWfxt+CtNwmitDQ5vKvz+ZCmNBOndbP5us6ldNGndFeo9Dq8fhwr9aQw9tdodXN3+/t9e8Aec5bq5WEAAAEOElEQVR4nO2c63qjIBCGlYkQDwHUGM1ps+luu+3e/wWuNvVpQJt4AMLu8iW/ipr3GUYYBqae5+Tk5OTk5OTk9F+JUgufTSnP8nShXGme8UlQzU3VNsaAMShW/UQWbys63lqUb0pSEKRJhPnlZiwUpWvM6nt9bUIMr8dSpUCQPqJ3KgLpCCpKaVpoNNKHiF/UVEOxKF+DfqZGMKIHN5gYgSIENoP7rwTN/tQKsXJg59HKN8RUU/nVoP6jdMtMMfk+2w7zKh6Z8fJ3kYgP6r8MG+u9uv9wNggqN+Xm71CQD4JKzVoqHQS1MAu1GAZltvvmQTVBQz1Lq30150ERgH0c+UyxGWdAEQT+Kq+C7HD8pjZ+mAGF4JRdBl4eqHW5GVBwCtoFCG3a1WFNhyKkumrnIVbXg5OhCF5dTZrU+15YYancE6ZyhTP2ZCi0z0SoEB4PlcSBeMVKXcA1vfv2YnjBd/jxUMQ/iFecLOg+hI/X4SENbBgSEJyvnKoePZkNQ0KzlG3fP+pVscLZb87chxctE81AnUfNDF1wmDVJNC9YRCqZ5kEhXJx3q90JmFVBHgLMsPLEx9xwWIseAUXumfZfgqqfS7AgBm0LMLGhTUki0jggq7/3Ml2ToSBZCnp5ulABPpdCwyL5+CFWnH/sVmW5C09JwW5llqZPyJEUuiw/ogQcinGWl9RmSQDOi+pncJkDgp+H5wi+DnWm+9QNKFEJ+Kg459T7nMApp5v0VBi1lARV+9KyuViI6eu44oV8MQ9Mh5IjzxtQuC8zRzk/xP2BoQlLseNXmfHqW69jGYDCO+/LDGa17xscDEA9SRcKWvcNWQagvt96Ll32uJUBqNsKehaxj4aifNuXz3mwpbwsss5StZ47w4IhKB4c8uMxr/oGrENnujEElf9qAhrY/3jttr11NoCNQL2Fvy+3EyjCQDIWpaEc9BmBCj9XzwiHXIYq5Y0DA1B0+/vz3tpWS9mt0m5KQDtUdf3O1yErlndjX/3EOFQpvl2IPVNxO++wN2+pJzGUQ0mUiR3YCRWMBHnSnehVtFQmZ2wMWEreTUL4KFoqUAc12VI+k34yiKVY3cjCQYLCS21Qwy0lr1nYShvUmHWfMShnKQfloByUJijzE/JfCiWv3N2Irh/KWcpBWQxl55Bg4+D5iCXWX2opN3g6qEZ2QmWBoE8oKjZ0oPBOvKCT3p9xBCCKBbXpOOSLf49RcufOzpbD9PNTfnParP28n9ltW4TdMoDuvjrImKrSizOk7rCEykPy96qChh6St7KcwMrCCytLVLg8wOkUiQcV81hZ9mRlgVitUuHp0ttMbHmf5kMbhedwb2lM0SHlazNUBNbData8tpBVOxYhzenf4aqpjJT8jkDyzBRHw+vokm2+KX2NZeR4Qhm55oJ7HE0quL+AWfavCVpr6ZLOZzs5OTk5OTk5OdmoP9feY4eVmuPIAAAAAElFTkSuQmCC"
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
          }}
        />

        <SearchBar placeholder="Search" icon={<Search />} />
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <TopBarElement title="Home" icon={<House />} selected={true} />

        <TopBarElement
          title="My Network"
          icon={<Workflow />}
          selected={false}
        />

        <TopBarElement
          title="Jobs"
          icon={<BriefcaseBusiness />}
          selected={false}
        />

        <TopBarElement title="Messaging" icon={<Mail />} selected={false} />

        <TopBarElement title="Notifications" icon={<Bell />} selected={false} />

        <TopBarEleWithDropdown title="Kartik" icon={<User />} />

        <TopBarEleWithDropdown title="Business" icon={<Grid2x2 />} />
      </div>
    </div>
  );
};

export default Topbar;

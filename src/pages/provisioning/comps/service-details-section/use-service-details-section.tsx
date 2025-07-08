import {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import type { DropdownItemProps } from "../../../../components/dropdown/dropdown-types";
import {
  SOFTWARE_RELEASE_OPTIONS,
  VERSION_OPTIONS,
} from "./service-details-section-constants";
import type { TextInputTagRef } from "../../../../components/textinput-tag/textinput-tag-types";
import type { ServiceDetailsSectionRef } from "./service-details-section.types";
import type { TextInputProps } from "../../../../components/text-input/text-input-types";

const useServiceDetailsSection = (
  ref: React.ForwardedRef<ServiceDetailsSectionRef>
) => {
  const textInputTagRef = useRef<TextInputTagRef>(null);

  const [showLoading, setShowLoading] = useState<boolean>(false);

  const [softwareReleaseOptions, setSoftwareReleaseOptions] = useState<
    DropdownItemProps[]
  >(SOFTWARE_RELEASE_OPTIONS);
  const [versionOptions, setVersionOptions] =
    useState<DropdownItemProps[]>(VERSION_OPTIONS);
  const [selectedSoftwareRelease, setSelectedSoftwareRelease] = useState<
    string | number
  >(SOFTWARE_RELEASE_OPTIONS[0].value);
  const [selectedVersion, setSelectedVersion] = useState<string | number>(
    VERSION_OPTIONS[0].value
  );

  const [serviceName, setServiceName] = useState<string>("");
  const [serviceNameMessage, setServiceNameMessage] = useState<string>("");
  const [serviceDescription, setServiceDescription] = useState<string>("");
  const [helpTextTags, setHelpTextTags] =
    useState<TextInputProps["$helpText"]>();
  const [createAsContainerDb, setCreateAsContainerDb] =
    useState<boolean>(false);

  const validateForm = useCallback(() => {
    let isFormValid = true;

    if (serviceName.trim() === "") {
      setServiceNameMessage("Service name cannot be empty.");
      isFormValid = false;
    }
    if (textInputTagRef.current?.getTags().length === 0) {
      setHelpTextTags({
        message: "Please add at least one tag.",
        color: "danger-100",
      });
      isFormValid = false;
    }

    return isFormValid;
  }, [serviceName]);

  const handleServiceNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setServiceName(value);
      if (value.trim() === "") {
        setServiceNameMessage("Service name cannot be empty.");
      } else {
        setServiceNameMessage("");
      }
    },
    []
  );

  const handleServiceDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setServiceDescription(e.target.value);
    },
    []
  );

  const handleChangeTagText = useCallback(() => {
    setHelpTextTags(undefined);
  }, []);

  const handleSoftwareReleaseChange = useCallback((value: string | number) => {
    setSelectedSoftwareRelease(value);
    setSoftwareReleaseOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        $isSelected: option.value === value,
      }))
    );
  }, []);

  const handleVersionChange = useCallback((value: string | number) => {
    setSelectedVersion(value);
    setVersionOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        $isSelected: option.value === value,
      }))
    );
  }, []);

  const handleCreateAsContainerDbChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCreateAsContainerDb(e.target.checked);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (validateForm()) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        setShowLoading(false);
        setServiceNameMessage("");
        setServiceDescription("");
        textInputTagRef.current?.clear();
        setSelectedSoftwareRelease(SOFTWARE_RELEASE_OPTIONS[0].value);
        setSelectedVersion(VERSION_OPTIONS[0].value);
        setSoftwareReleaseOptions(SOFTWARE_RELEASE_OPTIONS);
        setVersionOptions(VERSION_OPTIONS);
        setCreateAsContainerDb(false);
      }, 3000);
    }
  }, [validateForm]);

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return {
    textInputTagRef,
    serviceName,
    serviceNameMessage,
    serviceDescription,
    softwareReleaseOptions,
    versionOptions,
    selectedSoftwareRelease,
    selectedVersion,
    createAsContainerDb,
    helpTextTags,
    showLoading,
    handleSoftwareReleaseChange,
    handleVersionChange,
    handleServiceNameChange,
    handleChangeTagText,
    handleServiceDescriptionChange,
    handleCreateAsContainerDbChange,
  };
};

export default useServiceDetailsSection;

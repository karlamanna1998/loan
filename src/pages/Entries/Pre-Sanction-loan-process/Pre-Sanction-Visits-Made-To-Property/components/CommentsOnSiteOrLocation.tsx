import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";

class commentsOnSiteModel {

  comments: string = '';

}

export const CommentsOnSiteOrLocation = () => {
  const [formData, setFormData] = useState<commentsOnSiteModel>(
    new commentsOnSiteModel()
  );
  const dummyoptionArray = [{ value: '' }, { value: 'o1' }];
  const { option } = useContext(OptionContext);
  // function to store input field values in a common form state
  const formValuesController = (inputVal: string, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal,
    }));
  };

  //   function fired on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('submitetd');
  };
  return (
    <>
      <PageBody heading={'Comments on Site / Location'}>
        <form action="" onSubmit={onSubmitHandler}>
          <TextAreaComp
            formValuesController={formValuesController}
            name="comments"
            value={formData.comments}
            label="Comments on Site / Location"
            class='cs4'
          />
        </form>
      </PageBody>
    </>
  )
}

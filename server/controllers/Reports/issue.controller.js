import Issue from '../../models/Reports/issue.model.js';

// Operacja tworzenia zgłoszenia problemu
export const createIssue = async (req, res) => {
  try {
    const { deviceId, problemType, description, reportedBy } = req.body;
    const newIssue = await Issue.create({ deviceId, problemType, description, reportedBy });
    res.status(201).json(newIssue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas tworzenia zgłoszenia problemu" });
  }
};

// Operacja pobierania wszystkich zgłoszeń problemów
export const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas pobierania zgłoszeń problemów" });
  }
};

// Operacja pobierania pojedynczego zgłoszenia problemu
export const getIssueById = async (req, res) => {
  const { id } = req.params;
  try {
    const issue = await Issue.findById(id);
    if (!issue) {
      return res.status(404).json({ message: "Zgłoszenie problemu nie zostało znalezione" });
    }
    res.status(200).json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas pobierania zgłoszenia problemu" });
  }
};

// Operacja aktualizacji zgłoszenia problemu
export const updateIssue = async (req, res) => {
  const { id } = req.params;
  const { problemType, description, status } = req.body;
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(id, { problemType, description, status }, { new: true });
    if (!updatedIssue) {
      return res.status(404).json({ message: "Zgłoszenie problemu nie zostało znalezione" });
    }
    res.status(200).json(updatedIssue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas aktualizacji zgłoszenia problemu" });
  }
};

// Operacja usuwania zgłoszenia problemu
export const deleteIssue = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedIssue = await Issue.findByIdAndDelete(id);
    if (!deletedIssue) {
      return res.status(404).json({ message: "Zgłoszenie problemu nie zostało znalezione" });
    }
    res.status(200).json({ message: "Zgłoszenie problemu zostało usunięte" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas usuwania zgłoszenia problemu" });
  }
};